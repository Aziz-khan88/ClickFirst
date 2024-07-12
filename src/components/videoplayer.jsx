import styles from "../../styles/components/video.module.scss";

const VideoPlayer = ({ video }) => {
    return (
        <div className={styles.bannerVideo}>
            <video width="100%" controls={false} autoPlay={true} loop={true} muted preload="none" >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;
