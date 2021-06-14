const validInputs = (...inputs) =>
inputs.every(inp => Number.isFinite(inp));
e.preventDefault();
const allPositive = (...inputs) => inputs.every(inp => inp > 0);

if (
!validInputs(distance, duration, cadence)||
!allPositive(distance, duration, cadence)
// !Number.isFinite(distance) ||
// !Number.isFinite(distance) ||
// !Number.isFinite(cadence)
)
