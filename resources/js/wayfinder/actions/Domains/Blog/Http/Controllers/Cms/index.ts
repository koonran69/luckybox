import PostController from './PostController'
import CategoryController from './CategoryController'
import PostCommentController from './PostCommentController'

const Cms = {
    PostController: Object.assign(PostController, PostController),
    CategoryController: Object.assign(CategoryController, CategoryController),
    PostCommentController: Object.assign(PostCommentController, PostCommentController),
}

export default Cms