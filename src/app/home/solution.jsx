import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/solution.module.scss"
import { TitleBorderLine } from "@/src/app/app-constants"
import SolutionMain from "@/src/components/solutionmain"

const Solution = () => {
    return (
        <section className={`ptb-100 ${styles.solutionSec}`}>
            <Container>
                <Row>
                    <Col xl={6} lg={8} className="m-auto text-center">
                        <h2>Drive Growth with Our Tailored Business Solutions</h2>
                        <TitleBorderLine />
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col xl={12} lg={12}>

                        <SolutionMain />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Solution