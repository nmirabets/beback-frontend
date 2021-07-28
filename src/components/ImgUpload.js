import React from 'react';

import { CameraIcon } from '@heroicons/react/outline';

function ImgUpload(props) {
	return (
		<div>
			{props.url !== "" ? (
				<img src={props.url} alt="upload img" className={props.className} />
			) : (
				<CameraIcon className={props.className}/>
			)}
			<input
				type="file"
				id="upload-button"
				style={{ display: "none" }}
				onChange={props.handleChange}
			/>
		</div>
	);
}

export default ImgUpload;
