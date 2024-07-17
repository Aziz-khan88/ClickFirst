import { Col, Container, Row } from "react-bootstrap"
import ImgSlider from "@/src/components/imgslider"
import IMG01 from "media/home/creation/img01.png"
import IMG02 from "media/home/creation/img02.png"
import IMG03 from "media/home/creation/img03.png"
import IMG04 from "media/home/creation/img04.png"
import IMG05 from "media/home/creation/img05.png"
import IMG06 from "media/home/creation/img06.png"
import IMG07 from "media/home/creation/img07.png"
import IMG08 from "media/home/creation/img08.png"
import IMG09 from "media/home/creation/img09.png"


const SLIDES = [
    {
        img: IMG01.src
    },
    {
        img: IMG02.src
    },
    {
        img: IMG03.src
    },
    {
        img: IMG04.src
    },
    {
        img: IMG05.src
    },
    {
        img: IMG06.src
    },
    {
        img: IMG07.src
    },
    {
        img: IMG08.src
    },
    {
        img: IMG09.src
    },
    {
        img: IMG06.src
    }
]

const OPTIONS1 = { align: 'start', dragFree: true, direction: 'rtl', loop: true }
const OPTIONS2 = { align: 'end', dragFree: true, loop: true }
const Creation = () => {
    return (
        <section className="creationSe">
            <Container>
                <Row>
                    <Col xxl={12} xl={12} className="text-center m-auto">
                        <h2>Your Thoughts, <span>Our Creation.</span></h2>
                        <ImgSlider slides={SLIDES} options={OPTIONS2} />
                        <ImgSlider slides={SLIDES} options={OPTIONS1} />
                        <ImgSlider slides={SLIDES} options={OPTIONS2} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Creation