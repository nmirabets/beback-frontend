import React from 'react';

import { CameraIcon } from '@heroicons/react/outline';

function ImgUpload(props) {
	return (
		<div>
			<label htmlFor="upload-button">
				{props.url === "" ? (
					<img src={props.url} alt="upload img" width="100" height="100" />
				) : (
					<>
						<CameraIcon className="text-blue-300 rounded-full w-20 h-20 p-3 my-8 mx-4 " />
					</>
				)}
			</label>
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
