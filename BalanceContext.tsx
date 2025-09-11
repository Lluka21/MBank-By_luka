import React, { createContext, ReactNode, useState } from "react";

type CalculateBalanceContextType = {
  currentBalance: nu
  setCurrentBalance: React.Dispatch<React.SetStateAction<number>>;
  formattedcurrBal: string;
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
  convertUserInputToNumber: () => void;
};

export const CalculateBalanceContext = createContext<
  CalculateBalanceContextType | undefined
>(undefined);

type CalculateBalanceProviderProps = {
  children: ReactNode;
};

export default function CalculateBalanceProvider({
  children,
}: CalculateBalanceProviderProps) {
  const [userInput, setUserInput] = useState<string>("");
  const [currentBalance, setCurrentBalance] = useState<number>(10000);

  const formattedcurrBal = new Intl.NumberFormat("fr-FR").format(
    currentBalance
  );

  const convertUserInputToNumber = () => {
    const formattedUserInput = parseFloat(userInput);
    const calculatedBalance = currentBalance - formattedUserInput;
    setCurrentBalance(calculatedBalance);
  };

  return (
    <CalculateBalanceContext.Provider
      value={{
        currentBalance,
        setCurrentBalance,
        formattedcurrBal,
        userInput,
        setUserInput,
        convertUserInputToNumber,
      }}
    >
      {children}
    </CalculateBalanceContext.Provider>
  );
}





