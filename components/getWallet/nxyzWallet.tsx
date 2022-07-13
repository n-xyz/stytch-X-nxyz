import React from "react";

interface walletProps {
  walletAddress: string;
}

export default function Wallet({ walletAddress }: walletProps) {
  const handleClick = async () => {
    event.preventDefault();

    const data = {
      address: walletAddress,
    };

    const JSONdata = JSON.stringify(data);

    const endpoint = "/api/nxyz";

    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      qyery: JSONdata,
    };
    const response = await fetch(endpoint, options);

    const result = await response.json();

    console.log(result);
  };

  return (
    <div>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        see Wallet
      </button>
    </div>
  );
}
