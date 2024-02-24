import { SubmitHandler, useForm } from "react-hook-form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select"
import { PostCreate, PostStatus, createPost } from "../../lib/posts";
import { addHours } from "../../lib/utils";
import usePosts from "../../hooks/usePosts";


type PostEditorParams = {
  title: string;
  description: string;
  publish_gap: 'IMMEDIATE' | '6_HOURS' | '12_HOURS';
  status?: PostStatus
}

export default function PostEditor() {
  const {
    handleSubmit,
    register,
    reset,
    setValue
  } = useForm<PostEditorParams>();

  const { mutate } = usePosts();

  const onPostCreate = async (data: PostEditorParams) => {
    const post: PostCreate = {
      title: data.title,
      description: data.description,
      status: data.status!,
      likes: 0,
      comments: 0,
      shares: 0,
      published_at: new Date()
    }

    switch ( data.publish_gap ) {
      case '6_HOURS':
        post.published_at = addHours(new Date(), 6);
        break;

      case '12_HOURS':
        post.published_at = addHours(new Date(), 12);
        break;
    }

    if ( await createPost(post) ) {
      mutate();
      reset();
    }
  }

  const onPublish: SubmitHandler<PostEditorParams> = (data) => onPostCreate({ ...data, status: PostStatus.PUBLISHED })
  const onDraft: SubmitHandler<PostEditorParams> = (data) => onPostCreate({ ...data, status: PostStatus.DRAFT })

  return (
    <div>
      <div className="flex flex-col px-4">
          <div className="flex-1 px-2 pt-2 mt-2">
              <textarea maxLength={100} className="bg-transparent text-neutral-800 font-medium text-2xl w-full resize-none focus:outline-none" rows={1} cols={50} placeholder="Some Title???" { ...register("title", {required: true}) }></textarea>
          </div>
          <div className="flex-1 px-2 pt-2 mt-2">
              <textarea maxLength={200} className="bg-transparent text-neutral-800 font-medium text-lg w-full resize-none focus:outline-none" rows={4} cols={50} placeholder="What's happening?" { ...register("description", {required: true}) }></textarea>
          </div>
      </div>
      <div className="flex justify-between px-4 pt-6 pb-4">
        <div>
          <Select onValueChange={val => setValue('publish_gap', val as PostEditorParams['publish_gap'])}>
            <SelectTrigger className="w-[180px] box-shadow-none border-neutral-400 rounded-lg pl-4 font-[Geist] text-neutral-800">
              <SelectValue { ...register("publish_gap", {required: true}) } />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="IMMEDIATE">Publish Immediately</SelectItem>
              <SelectItem value="6_HOURS">In 6 hours</SelectItem>
              <SelectItem value="12_HOURS">In 12 hours</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-4 text-sm font-medium">
          <div className="text-neutral-800 cursor-pointer" onClick={handleSubmit(onDraft)}>
            Save Draft
          </div>
          <button onClick={handleSubmit(onPublish)} className="bg-neutral-800 text-neutral-100 py-2 px-8 rounded-lg float-right">
            Post
          </button>
        </div>
      </div>
    </div>
  )
}