// src/components/NewPost/QuestionForm.tsx
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const QuestionForm = () => {
  const initialValues = {
    title: "",
    body: "",
    tags: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string()
      .max(100, "Title must be at most 100 characters")
      .required("Title is required"),

    body: Yup.string()
      .max(1000, "Question body must be at most 1000 characters")
      .required("Question body is required"),

    tags: Yup.string()
      .max(100, "Tags must be at most 100 characters")
      .required("Tags are required"),
  });

  const onSubmit = (values: typeof initialValues) => {
    console.log("Question Submitted:", values);
    alert("Question submitted successfully!");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Title</label>
          <Field
            name="title"
            className="border border-gray-300 rounded w-full p-2"
            placeholder="Enter a short, descriptive question title"
          />
          <ErrorMessage
            name="title"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">
            Describe your problem
          </label>
          <Field
            as="textarea"
            name="body"
            className="border border-gray-300 rounded w-full p-2 h-32"
            placeholder="Explain your question in detail, including what you’ve tried"
          />
          <ErrorMessage
            name="body"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Tags</label>
          <Field
            name="tags"
            className="border border-gray-300 rounded w-full p-2"
            placeholder="Please add up to 3 tags to describe your question e.g., React, API, CSS"
          />
          <ErrorMessage
            name="tags"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>

        <button
          type="submit"
          className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-800"
        >
          Post
        </button>
      </Form>
    </Formik>
  );
};

export default QuestionForm;
