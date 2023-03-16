import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setHourRange } from '../services/stateService';

function Durations() {


	// useParams - это хук от react-router-dom, который слушает переданные ему параметры в ссылки
	// и назначает их всех в один объект
	// При получении новых параметров инициализируется рендер компонента
	const { hour: durationParam } = useParams();
	const navigate = useNavigate();


	// useSelector - это хук, который слушает redux облако и если изменится состояние 
	// то useSelector инициализирует отрисовку компонента
	// useSelector принимает функцию как аргумент и эта функция определяет, какое состояние слушать
	const hourRange = useSelector((state) => state.hourRange);

	// Для инициализирования изменения состояния используется dispatch
	// dispatch отправляет action в облако store / redux состояние
	// dispatch передает action в redux reducer, который запустит функцию, 
	// меняющую состояние и которую потом подхватит useSelector
	const dispatch = useDispatch();


	const durations = [1, 2, 3, 4, 6, 8];

	const handleClick = (duration) => {
		if(durationParam) {
			navigate('/');
			// navigate(`/low/${time}`)"
		} 	
		// В dispatch передаем action, а в action передаем новые данные о состоянии
		// в reducer передается объект {type: hourRange, payload: duration}
		dispatch(setHourRange(duration))
	}



	return (
		<ButtonToolbar className="justify-content-center" aria-label="Toolbar with button groups">
			<ButtonGroup style={{ padding: '10px', boxShadow: '1px 1px 5px gray', backgroundColor: 'rgb(255,255,255, 0.8)' }} className="me-2" aria-label="First group">
				{durations.map(duration => {
					const selectedDuration = durationParam ? +durationParam : hourRange
					return (
						<Button
							variant="outline-success"
							key={duration}
							active={duration === selectedDuration}
							onClick={() => handleClick(duration)}>
							{duration}h
						</Button>
					)
				})}
			</ButtonGroup>
		</ButtonToolbar>
	);
}

export default Durations; 