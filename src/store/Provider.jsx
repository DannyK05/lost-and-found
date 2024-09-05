import { Provider } from "react-redux";
import { store } from ".";

export default function ProviderWrapper({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
