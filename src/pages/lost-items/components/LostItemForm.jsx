import { FormButton } from "../../../components/form/FormButton";
import { FormInput } from "../../../components/form/FormInput";
import { useRegisterLostItemsMutation } from "../../../store/api/lost";

export default function LostItemForm() {
  const [register, { isLoading }] = useRegisterLostItemsMutation();
  return (
    <form className="flex flex-col items-center space-y-4 py-2">
      <label className="w-4/5">
        <span className="text-lost-blue text-sm">Item Image:</span>
        <input
          name="imageUrl"
          className="border-inherit text-sm active:border-lost-blue w-full border-2 p-2"
          alt="submit"
          type="file"
        />
      </label>
      <FormInput
        containerClassName="w-4/5"
        name={"title"}
        placeholder="Item Name"
      />
      <FormInput
        containerClassName="w-4/5"
        name={"lostAt"}
        placeholder="Location"
      />
      <FormInput
        containerClassName="w-4/5"
        name={"uniqueIdentifier"}
        placeholder="Unique Identifier"
      />
      <div className="flex w-4/5 items-center justify-between">
        <label>
          <span className="text-lost-blue text-sm">Date lost:</span>

          <input
            name="lostDate"
            className="w-full p-2 border-inherit text-sm outline-0 focus:border-lost-blue border-2"
            type="date"
          />
        </label>
        <label>
          <span className="text-lost-blue text-sm">Category:</span>
          <select
            name="category"
            className="w-full p-2 border-inherit text-sm outline-0 focus:border-lost-blue border-2"
          >
            <option value="Electronics/Gadgets">Electronics/Gadgets</option>
            <option value="Clothings">Clothings</option>
            <option value="Books">Books</option>
            <option value="Identification Cards">Identification Cards</option>
            <option value="Others">Others</option>
          </select>
        </label>
      </div>

      <textarea
        name="description"
        className="w-4/5 p-2 border-inherit text-sm outline-0 focus:border-lost-blue border-2"
        placeholder="Add description"
        maxLength={112}
      ></textarea>
      <FormButton className="w-4/5">Submit</FormButton>
    </form>
  );
}
