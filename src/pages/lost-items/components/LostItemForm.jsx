import { useForm } from "react-hook-form";
import { FormButton } from "../../../components/form/FormButton";
import { FormInput } from "../../../components/form/FormInput";
import { useRegisterLostItemsMutation } from "../../../store/api/lost";
import { zodResolver } from "@hookform/resolvers/zod";
import { LostItemFormSchema } from "../../../data/formSchema";
import InfoIcon from "../../../assets/icons/InfoIcon";
import FormLoadingSpinner from "../../../assets/icons/FormLoadingSpinner";
import { useState } from "react";

export default function LostItemForm() {
  const [registerLostItems, { isLoading }] = useRegisterLostItemsMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(LostItemFormSchema) });
  const [errorMessage, setErrorMessage] = useState();

  const SubmitForm = async (data) => {
    console.log(data);
    try {
      const response = await registerLostItems(data).unwrap();
      console.log(response);
      console.log(data);
    } catch (err) {
      console.log(err);
      if (err && err.data.message) {
        const error = err.data.message;

        setErrorMessage(error);
        setTimeout(() => {
          setErrorMessage(null);
        }, 2000);
      } else {
        setErrorMessage(null);
      }
    }
  };
  return (
    <form
      onSubmit={handleSubmit(SubmitForm)}
      className="flex flex-col items-center space-y-4 py-2"
    >
      {" "}
      {errorMessage && (
        <div className="absolute text-xs py-2 flex items-center space-x-2 w-full bg-[#CA1C2D] text-white md:w-1/2 lg:w-1/2 right-0 top-0">
          <span>
            <InfoIcon />{" "}
          </span>{" "}
          <span>{errorMessage}</span>
        </div>
      )}
      <label className="w-4/5">
        <span className="text-lost-blue text-sm">Item Image:</span>
        <input
          className="border-inherit text-sm active:border-lost-blue w-full border-2 p-2"
          alt="submit"
          type="file"
          {...register("image", { required: true })}
        />
      </label>
      <FormInput
        containerClassName="w-4/5"
        {...register("title")}
        placeholder="Item Name"
      />
      {errors.title?.message && (
        <span className="text-red-500 text-xs">{errors.title.message}</span>
      )}
      <FormInput
        containerClassName="w-4/5"
        {...register("lostAt")}
        placeholder="Location"
      />
      {errors.lostAt?.message && (
        <span className="text-red-500 text-xs">{errors.lostAt.message}</span>
      )}
      <FormInput
        containerClassName="w-4/5"
        {...register("uniqueIdentifier")}
        placeholder="Unique Identifier"
      />
      {errors.uniqueIdentifier?.message && (
        <span className="text-red-500 text-xs">
          {errors.uniqueIndentifier.message}
        </span>
      )}
      <div className="flex w-4/5 items-center justify-between">
        <FormInput
          containerClassName="w-2/5"
          {...register("itemBrand")}
          placeholder="Item Brand (Optional)"
        />

        <FormInput
          containerClassName="w-2/5"
          {...register("color")}
          placeholder="Color"
        />
      </div>
      <div className="flex w-4/5 items-center justify-between">
        <label>
          <span className="text-lost-blue text-sm">Date lost:</span>

          <input
            {...register("lostDate")}
            className="w-full p-2 border-inherit text-sm outline-0 focus:border-lost-blue border-2"
            type="date"
          />
          {errors.lostDate?.message && (
            <span className="text-red-500 text-xs">
              {errors.lostDate.message}
            </span>
          )}
        </label>
        <label>
          <span className="text-lost-blue text-sm">Category:</span>
          <select
            {...register("category")}
            className="w-full p-2 border-inherit text-sm outline-0 focus:border-lost-blue border-2"
          >
            <option value="Electronics/Gadgets">Electronics/Gadgets</option>
            <option value="Clothings">Clothings</option>
            <option value="Books">Books</option>
            <option value="Identification Cards">Identification Cards</option>
            <option value="Others">Others</option>
          </select>
          {errors.category?.message && (
            <span className="text-red-500 text-xs">
              {errors.category.message}
            </span>
          )}
        </label>
      </div>
      <textarea
        {...register("description")}
        className="w-4/5 p-2 border-inherit text-sm outline-0 focus:border-lost-blue border-2"
        placeholder="Add description"
        maxLength={112}
      ></textarea>
      {errors.description?.message && (
        <span className="text-red-500 text-xs">
          {errors.description.message}
        </span>
      )}
      <FormButton className="w-4/5">
        {isLoading ? (
          <span className="fill-white w-full flex items-center justify-center">
            <FormLoadingSpinner />
          </span>
        ) : (
          "Submit"
        )}
      </FormButton>
    </form>
  );
}
