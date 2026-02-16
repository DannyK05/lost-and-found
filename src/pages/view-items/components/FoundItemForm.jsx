import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { zodResolver } from "@hookform/resolvers/zod";

import { useRegisterFoundItemsMutation } from "../../../store/api/found";

import FormLoadingSpinner from "../../../assets/icons/FormLoadingSpinner";

import FormButton from "../../../components/form/FormButton";
import FormInput from "../../../components/form/FormInput";

import { FoundItemFormSchema } from "../formSchema";
import { useHandleApiMessage } from "../../../components/message-banner/hooks";

export const FoundItemForm = ({ toggleContainer }) => {
  const [registerFoundItems, { isLoading }] = useRegisterFoundItemsMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(FoundItemFormSchema) });

  const { handleApiMessage } = useHandleApiMessage();

  const submitForm = async (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    formData.append("title", data.title);
    formData.append("foundAt", data.foundAt);
    formData.append("uniqueIdentifier", data.uniqueIdentifier);
    formData.append("itemBrand", data.itemBrand);
    formData.append("color", data.color);
    formData.append("foundDate", data.foundDate);
    formData.append("category", data.category);
    formData.append("description", data.description);

    try {
      const response = await registerFoundItems(formData).unwrap();
      handleApiMessage(response.message);

      setTimeout(() => {
        toggleContainer();
        reset();
      }, 800);
    } catch (err) {
      if (err && err.data.message) {
        const error = err.data.message;
        handleApiMessage(error, true);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="flex flex-col items-center space-y-4 py-2"
    >
      <label className="w-4/5">
        <span className="text-lost-blue text-sm">Item Image:</span>
        <input
          {...register("image")}
          className="w-full p-2 border-2 text-sm active:border-lost-blue lg:hover:border-lost-blue"
          alt="submit"
          type="file"
        />
      </label>

      <div className="w-4/5 flex flex-col items-center space-y-4">
        <FormInput
          containerClassName="w-full"
          {...register("title")}
          placeholder="Item Name"
          errorMessage={errors.title?.message}
        />

        <FormInput
          containerClassName="w-full"
          {...register("foundAt")}
          placeholder="Location"
          errorMessage={errors.foundAt?.message}
        />

        <FormInput
          containerClassName="w-full"
          {...register("uniqueIdentifier")}
          placeholder="Unique Identifier"
          errorMessage={errors.uniqueIdentifier?.message}
        />
      </div>

      <div className="w-4/5 flex flex-col items-center space-y-4 lg:flex-row lg:space-x-4">
        <FormInput
          containerClassName="w-full"
          {...register("itemBrand")}
          placeholder="Item Brand (Optional)"
        />

        <FormInput
          containerClassName="w-full"
          {...register("color")}
          placeholder="Color"
        />
      </div>

      <div className="w-4/5 flex flex-col items-center justify-between lg:flex-row">
        <label className="w-full">
          <span className="text-lost-blue text-sm">Date found:</span>

          <input
            {...register("foundDate")}
            className="w-full p-2 outline-0 border-2 text-sm focus:border-lost-blue lg:hover:border-lost-blue"
            type="date"
          />
          {errors.foundDate?.message && (
            <span className="text-red-500 text-xs">
              {errors.foundDate.message}
            </span>
          )}
        </label>

        <label className="w-full">
          <span className="text-lost-blue text-sm">Category:</span>
          <select
            {...register("category")}
            className="w-full p-2 outline-0 border-2 text-sm focus:border-lost-blue lg:hover:border-lost-blue"
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

      <label className="w-4/5 flex flex-col items-start">
        <span className="text-lost-blue text-sm">Description:</span>
        <textarea
          {...register("description")}
          className="w-full h-20 p-2 text-sm outline-0 border-2 focus:border-lost-blue lg:hover:border-lost-blue"
          placeholder="Add description"
          maxLength={112}
        ></textarea>
        {errors.description?.message && (
          <span className="text-red-500 text-xs">
            {errors.description.message}
          </span>
        )}
      </label>

      <FormButton className="w-4/5">
        {" "}
        {isLoading ? (
          <span className="w-full flex items-center justify-center fill-white">
            <FormLoadingSpinner />
          </span>
        ) : (
          "Submit"
        )}
      </FormButton>
    </form>
  );
};

FoundItemForm.propTypes = { toggleContainer: PropTypes.func };
