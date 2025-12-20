import ProductVariantController from './ProductVariantController'
import ProductController from './ProductController'
import CategoryController from './CategoryController'
import ProductReviewController from './ProductReviewController'

const Cms = {
    ProductVariantController: Object.assign(ProductVariantController, ProductVariantController),
    ProductController: Object.assign(ProductController, ProductController),
    CategoryController: Object.assign(CategoryController, CategoryController),
    ProductReviewController: Object.assign(ProductReviewController, ProductReviewController),
}

export default Cms