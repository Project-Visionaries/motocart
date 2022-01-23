
import { Banner } from './Banner'
import { BestSeller } from './BestSeller'
import { BlogPage } from './Blog'
import { Brand } from './Brand'
import { PopularParts } from './PopularParts'
import { Review } from './Reviews'
import { WeeklyDeals } from './WeelyDeals'

interface Props {

}

export const Home = (props: Props) => {
    return (
        <div>
            <Banner />
            <PopularParts />
            <WeeklyDeals />
            <Review />
            <BestSeller />
            <BlogPage />
            <Brand />
        </div>
    )
}
