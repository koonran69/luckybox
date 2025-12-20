import BannerController from './BannerController'
import BannerItemController from './BannerItemController'

const Banner = {
    BannerController: Object.assign(BannerController, BannerController),
    BannerItemController: Object.assign(BannerItemController, BannerItemController),
}

export default Banner