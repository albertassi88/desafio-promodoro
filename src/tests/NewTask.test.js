import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddTask from "../components/AddTask";

describe("test the FormSendEmail component", () => {  
    test("write the name in the input", () => {
      render(<AddTask />)
      const oi = screen.getByTestId("add-task");
      fireEvent.click(oi)
      const fieldNome = screen.getByPlaceholderText("Digite sua tarefa");
      fireEvent.change(fieldNome, {target: {value: "Estudar"}});
      expect(fieldNome.value).toEqual("Estudar");
    });

  });
  