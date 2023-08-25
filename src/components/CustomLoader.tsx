import { Loader } from '@react-three/drei';

const CustomLoader = () => {
	const customContainerStyles = {
		background: '#404040'
	};
	const customInnerStyles = {
		height: '12px',
		width: '200px',
		borderRadius: '5px',
		backgroundColor: 'white',
		transition: '4s ease-out '
	};
	const customBarStyles = {
		height: '12px',
		width: '100%',
		borderRadius: '5px',
		backgroundColor: 'black'
	};
	const customDataStyles = {
		fontSize: '1.2rem',
		fontWeight: '600',
		color: '#000000'
	};

	return (
		<Loader
			containerStyles={customContainerStyles}
			innerStyles={customInnerStyles}
			barStyles={customBarStyles}
			dataStyles={customDataStyles}
		/>
	);
};

export default CustomLoader;
