import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectCurrentUser,
  selectCurrentUserToken,
} from "../../store/selector";
import { removeCredentials } from "../../store/features/authSlice";

export function RouteGuard({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Authorised, setAuthorised] = useState(false);
  const currentUser = useSelector(selectCurrentUser);
  const authToken = useSelector(selectCurrentUserToken);

  const AuthCheck = useCallback(() => {
    if (authToken) {
      const parts = authToken.split(".");
      if (parts.length === 3) {
        const decodedToken = JSON.parse(window.atob(parts[1]));
        if (decodedToken.exp * 1000 >= Date.now()) {
          setAuthorised(true);
          return;
        }
      }
    }
    if (currentUser) {
      setAuthorised(true);
    } else {
      setAuthorised(false);
      dispatch(removeCredentials());
      navigate("/");
    }
  }, [authToken, currentUser, dispatch, navigate]);

  useEffect(() => {
    AuthCheck();
  }, [AuthCheck]);

  return Authorised ? children : null;
}
