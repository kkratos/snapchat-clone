import React, { useRef, useCallback } from "react";
import WebCam from 'react-webcam';
import { setCameraImage } from "./features/cameraSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import "./WebcamCapture.css";

const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: "user",
}

function WebcamCapture() {

    const webCamRef = useRef(null);
    const dispatch = useDispatch();
    const history = useHistory();


    const capture = useCallback(() => {
        const imageSrc = webCamRef.current.getScreenshot();
        dispatch(setCameraImage(imageSrc));
        history.push('/preview')
    }, [webCamRef, dispatch, history])

    return <div className="webcamCapture">
        <WebCam
            audio={false}
            height={videoConstraints.height}
            ref={webCamRef}
            screenshotFormat="image/jpeg"
            width={videoConstraints.width}
            videoConstraints={videoConstraints}
        />
        <RadioButtonUncheckedIcon
            className='webcamCapture__button'
            onClick={capture}
            fontSize="large"
        />
    </div>
}

export default WebcamCapture