import React, { useCallback, useRef } from 'react';
import { CanvasContainer, FileInput } from './style';

const FileUploader = () => {
    const canvasContainerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const onInputFile = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const target = e.target.files[0];
            if (target.type.startsWith('image/')) {
                try {
                    console.log('check target', target);
                    // 파일 화면에 표시 및 Step 업데이트
                    const reader = new FileReader();
                    reader.onload = () => {
                        const canvasWidth = (canvasContainerRef.current?.clientWidth as number) - 24;
                        const canvasHeight = (canvasContainerRef.current?.clientHeight as number) - 24;
                        const context = canvasRef.current?.getContext('2d');
                        const image = new Image();
                        image.crossOrigin = 'Anonymous';
                        image.src = reader.result as string;
                        setUrl(reader.result as string);

                        if (canvasWidth && canvasHeight) {
                            image.onload = () => {
                                // 추후 사이즈 조절
                                const dWidth = image.width > canvasWidth ? canvasWidth : image.width;
                                const dHeight = image.height > canvasHeight ? canvasHeight : image.height;
                                context?.drawImage(image, 0, 0, image.width, image.height, 0, 0, dWidth, dHeight);
                            };
                        }
                    };
                    reader.readAsDataURL(target);
                } catch (error) {
                    console.dir(error);
                }
            } else {
                alert('you can upload only image files!');
            }
        }
    }, []);
    return (
        <>
            <div>
                <FileInput type="file" accept=".gif, .jpg, .png, .bmp" onChange={onInputFile} />
            </div>
            <CanvasContainer ref={canvasContainerRef}>
                <canvas ref={canvasRef} />
            </CanvasContainer>
        </>
    );
};

export default FileUploader;
