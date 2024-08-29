export const TextInput = ({ type = "text", placeholder }) => {
  return (
    <div>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};
