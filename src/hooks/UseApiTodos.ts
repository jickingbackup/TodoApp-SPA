import useAxios from 'axios-hooks'
import { Todo } from '../common/Types'

export const useApiTodos = () => {
	const [{ data, loading, error }, getTodos] = useAxios<Todo[]>(
		{
			url: `${process.env.REACT_APP_API_ROOT_URL}/todos`,
			method: 'GET'
		},
		{ manual: true }
	)

	return { data, loading, error, getTodos }
}
