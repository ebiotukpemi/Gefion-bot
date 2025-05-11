document.addEventListener("DOMContentLoaded", () => {
  const table = document.getElementById("token-table");

  const tokens = [
    { name: "Token A", price: "$0.01", supply: "10M", marketCap: "$100K" },
    { name: "Token B", price: "$0.05", supply: "50M", marketCap: "$2.5M" }
  ];

  tokens.forEach(token => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${token.name}</td><td>${token.price}</td><td>${token.supply}</td><td>${token.marketCap}</td>`;
    table.appendChild(row);
  });
});
