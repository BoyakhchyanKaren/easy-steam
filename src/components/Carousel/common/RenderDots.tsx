import classNames from "classnames/bind";
import styles from '../custom-carousel.module.css';
const cx = classNames.bind(styles);

const RenderCustomDot = ({ isActive }: { isActive: boolean }) => {
    return (
        <span
            className={cx(
                [
                    'carousel__dot',
                    { 'carousel__dot--active': isActive }
                ]
            )}
        />
    );
}

export default RenderCustomDot;