import { Col, Container, Row } from "react-bootstrap"
import ImgSlider from "@/src/components/imgslider"
// Last Week
import IMG01 from "media/home/creation/img_01.jpeg"
import IMG02 from "media/home/creation/img_02.jpeg"
import IMG03 from "media/home/creation/img_03.jpeg"
import IMG04 from "media/home/creation/img_04.jpeg"
import IMG05 from "media/home/creation/img_05.jpeg"
import IMG06 from "media/home/creation/img_06.jpeg"
import IMG07 from "media/home/creation/img_07.jpeg"
import IMG08 from "media/home/creation/img_08.jpg"
// Earlire Month
import IMG09 from "media/home/creation/img__01.jpg"
import IMG10 from "media/home/creation/img__02.png"
import IMG11 from "media/home/creation/img__03.jpg"
import IMG12 from "media/home/creation/img__04.jpg"
import IMG13 from "media/home/creation/img__05.jpg"
import IMG14 from "media/home/creation/img__06.jpg"
import IMG15 from "media/home/creation/img__07.jpg"
import IMG16 from "media/home/creation/img__08.jpg"
import IMG17 from "media/home/creation/img__09.jpg"
import IMG18 from "media/home/creation/img__10.jpg"
import IMG19 from "media/home/creation/img__11.jpg"
// Last Month
import IMG20 from "media/home/creation/img___01.jpg"
import IMG21 from "media/home/creation/img___02.jpg"
import IMG22 from "media/home/creation/img___03.jpg"
import IMG23 from "media/home/creation/img___04.jpg"
import IMG24 from "media/home/creation/img___05.jpg"
import IMG25 from "media/home/creation/img___06.jpg"
import IMG26 from "media/home/creation/img___07.jpg"
import IMG27 from "media/home/creation/img___08.jpg"
import IMG28 from "media/home/creation/img___09.jpg"
import IMG29 from "media/home/creation/img___10.jpg"
import IMG30 from "media/home/creation/img___11.jpg"
import IMG32 from "media/home/creation/img___12.jpg"

// Earlire Year

import IMG33 from "media/home/creation/img_1.jpg"
import IMG34 from "media/home/creation/img_2.jpg"
import IMG35 from "media/home/creation/img_3.jpg"
import IMG36 from "media/home/creation/img_4.jpg"
import IMG37 from "media/home/creation/img_5.jpg"
import IMG38 from "media/home/creation/img_6.jpg"
import IMG39 from "media/home/creation/img_7.jpg"
import IMG40 from "media/home/creation/img_8.jpg"
import IMG41 from "media/home/creation/img_9.jpg"
import IMG42 from "media/home/creation/img_10.jpg"
import IMG43 from "media/home/creation/img_11.jpg"
import IMG44 from "media/home/creation/img_12.jpg"
import IMG45 from "media/home/creation/img_13.jpg"

// Along time Ago
import IMG46 from "media/home/creation/img_t_1.jpg"
import IMG47 from "media/home/creation/img_t_2.jpg"
import IMG48 from "media/home/creation/img_t_3.jpg"
import IMG49 from "media/home/creation/img_t_4.jpg"
import IMG50 from "media/home/creation/img_t_5.jpg"
import IMG51 from "media/home/creation/img_t_6.jpg"
import IMG52 from "media/home/creation/img_t_7.jpg"
import IMG53 from "media/home/creation/img_t_8.jpg"
import IMG54 from "media/home/creation/img_t_9.jpg"
import IMG55 from "media/home/creation/img_t_10.jpg"
import IMG56 from "media/home/creation/img_t_11.jpg"
import IMG57 from "media/home/creation/img_t_12.jpg"
import IMG58 from "media/home/creation/img_t_13.jpg"
import IMG59 from "media/home/creation/img_t_14.jpg"
import IMG60 from "media/home/creation/img_t_15.jpg"
import IMG61 from "media/home/creation/img_t_16.jpg"
import IMG62 from "media/home/creation/img_t_17.jpg"
import IMG63 from "media/home/creation/img_t_18.jpg"
import IMG64 from "media/home/creation/img_t_19.jpg"
import IMG65 from "media/home/creation/img_t_20.jpg"
import IMG66 from "media/home/creation/img_t_21.jpg"
import IMG67 from "media/home/creation/img_t_22.jpg"
import IMG68 from "media/home/creation/img_t_23.jpg"
import IMG69 from "media/home/creation/img_t_24.jpg"
import IMG70 from "media/home/creation/img_t_25.jpg"
import IMG71 from "media/home/creation/img_t_26.jpg"
import IMG72 from "media/home/creation/img_t_27.png"
import IMG73 from "media/home/creation/img_t_28.png"

const SLIDES1 = [
    { img: IMG12.src },
    { img: IMG16.src },
    { img: IMG66.src },
    { img: IMG21.src },
    { img: IMG42.src },
    { img: IMG71.src },
    { img: IMG73.src },
    { img: IMG47.src },
    { img: IMG51.src },
    { img: IMG52.src },
    { img: IMG58.src },
    { img: IMG29.src },
    { img: IMG33.src },
    { img: IMG35.src },
    { img: IMG01.src },
    { img: IMG08.src },
    { img: IMG09.src },
    { img: IMG38.src },
    { img: IMG63.src },
];
const SLIDES2 = [
    { img: IMG02.src },
    { img: IMG10.src },
    { img: IMG13.src },
    { img: IMG17.src },
    { img: IMG25.src },
    { img: IMG27.src },
    { img: IMG28.src },
    { img: IMG32.src },
    { img: IMG34.src },
    { img: IMG37.src },
    { img: IMG41.src },
    { img: IMG45.src },
    { img: IMG43.src },
    { img: IMG48.src },
    { img: IMG53.src },
    { img: IMG59.src },
    { img: IMG62.src },
    { img: IMG65.src },
    { img: IMG70.src },
];

const SLIDES3 = [
    { img: IMG03.src },
    { img: IMG11.src },
    { img: IMG14.src },
    { img: IMG18.src },
    { img: IMG26.src },
    { img: IMG30.src },
    { img: IMG36.src },
    { img: IMG39.src },
    { img: IMG44.src },
    { img: IMG49.src },
    { img: IMG50.src },
    { img: IMG54.src },
    { img: IMG55.src },
    { img: IMG60.src },
    { img: IMG61.src },
    { img: IMG64.src },
    { img: IMG68.src },
    { img: IMG69.src },
    { img: IMG72.src },
];

const OPTIONS1 = { align: 'start', dragFree: true, direction: 'rtl', loop: true }
const OPTIONS2 = { align: 'end', dragFree: true, loop: true }
const Creation = () => {
    return (
        <section className="creationSe">
            <Container>
                <Row>
                    <Col xxl={12} xl={12} className="text-center m-auto">
                        <h2>Your Thoughts, <span>Our Creation.</span></h2>
                        <ImgSlider slides={SLIDES1} options={OPTIONS2} />
                        <ImgSlider slides={SLIDES2} options={OPTIONS1} />
                        <ImgSlider slides={SLIDES3} options={OPTIONS2} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Creation