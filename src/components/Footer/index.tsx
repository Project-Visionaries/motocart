
import { Divider } from '@material-ui/core'
import { FooterLinks } from './FooterLinks'
import { FooterNav } from './FooterNav'
import { FooterSubscribe } from './FooterSubscribe'
import { FooterTop } from './FooterTop'

interface Props {
    
}

export const Footer = (props: Props) => {
    return (
        <div>
            <FooterTop />
            <FooterSubscribe />
            <FooterNav />
            <Divider light={true} />
            <FooterLinks />
        </div>
    )
}
