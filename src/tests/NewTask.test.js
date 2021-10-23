import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddTask from "../components/AddTask";

describe("test the NewTask component", () => {  
    test("write the task in the input", () => {
      render(<AddTask />)
      const button = screen.getByTestId("add-task");
      fireEvent.click(button);
      const fieldTask = screen.getByPlaceholderText("Digite sua tarefa");
      fireEvent.change(fieldTask, {target: {value: "Estudar"}});
      expect(fieldTask.value).toEqual("Estudar");
    });
    test("press the Salvar button", () => {
      render(<AddTask />)
      const button = screen.getByTestId("add-task");
      fireEvent.click(button);
      const buttonSave = screen.getByTestId("btn-save");
      fireEvent.click(buttonSave);
    });
  });
  