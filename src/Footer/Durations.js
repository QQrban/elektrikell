import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { useSelector, useDispatch } from 'react-redux';
import { setHourRange } from '../services/stateService'

function Durations() {

	const buttons = [1, 2, 3, 4, 6, 8];
	const hourRange = useSelector((state) => state.hourRange);
	const dispatch = useDispatch();

	return (
		<ButtonToolbar className='justify-content-center' aria-label="Toolbar with button groups">
			<ButtonGroup style={{ padding: '10px', boxShadow: '1px 1px 5px gray', backgroundColor: 'rgb(255,255,255, 0.8)' }} className="me-2" aria-label="First group">
				{buttons.map(time => (
					<Button
						variant='outline-success'
						key={time}
						active={time === hourRange}
						onClick={() => dispatch(setHourRange(time))}>
						{time}h
					</Button>
				))}
			</ButtonGroup>
		</ButtonToolbar>
	);
}

export default Durations; 