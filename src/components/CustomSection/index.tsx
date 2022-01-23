import { Grid, makeStyles } from '@material-ui/core';
import { TETIARY_COLOR } from '../../constants/colors';
import { Header } from '../Header/Header'
import { CustomCard } from './CustomCard';
import { SquareBadge } from './CustomCard/SquareBadge';

const useStyles = makeStyles(theme => ({
    card: {
        paddingTop: "40px",
    }
}))


interface HeaderProps {
    title: string,
    leftColor: string,
    rightColor: string,
}
interface BardgeProps {
    color?: string,
    text: string,
    style?: React.CSSProperties | undefined
}
export interface CustomCardProps {
    reviews: number,
    image: string,
    title: string,
    amount: string,
    speed: string,
    mode: string,
    year: string,
    badge1?: string,
    badge2?: string,
}
interface Props {
    header: HeaderProps,
    card: CustomCardProps[]
}

export const CustomSection: React.FC<Props> = ({ header, card }) => {
    const classes = useStyles();
    return (
        <>
            <Header
                leftColor={header.leftColor}
                rightColor={header.rightColor}
                title={header.title}
            />
            <div className={classes.card}>
                <Grid container>
                    <Grid item xs={12} sm={6} md={3}>
                        <CustomCard
                            data={card[0]}
                            // badge1={<SquareBadge
                            //     color={card[0].badge1?.color ? card[0].badge1?.color : 'red'}
                            //     text={card[0].badge1?.text ? card[0].badge1?.text : 'USED'}
                            //     style={{ top: 0, left: 1 }}
                            // />
                            // }
                            // badge2={
                            //     <SquareBadge
                            //         color={card[0].badge2?.color ? card[0].badge2?.color : TETIARY_COLOR}
                            //         text={card[0].badge2?.text ? card[0].badge2?.text : '-15%'}
                            //         style={{ top: 0, right: 0 }}
                            //     />
                            // }
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <CustomCard
                            data={card[1]}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <CustomCard
                            data={card[2]}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <CustomCard
                            data={card[3]}
                        />
                    </Grid>
                </Grid>
            </div>
        </>
    )
}
