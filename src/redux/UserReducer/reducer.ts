interface User {
  name: string;
  email: string;
}

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

//Reducer: guarda o estado que desejamos compartilhar na aplicação
//         manipula/altera o estado

interface UserAction {
  type: string;
  payload?: User;
}

// Todo reducer precisa retornar o nosso estado atualizado
export function userReducer(
  state = initialState,
  action: UserAction
): UserState {
  return state;
}
