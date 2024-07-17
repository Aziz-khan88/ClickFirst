import { Modal } from "react-bootstrap"
import styles from "@/styles/components/videomodal.module.scss"

const VideoModal = (props) => {
    console.log("Aziz ", props);
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <div className={styles.videoPopup}>
                <iframe width="100%" height="100%" src={props.videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </Modal>
    )
}

export default VideoModal