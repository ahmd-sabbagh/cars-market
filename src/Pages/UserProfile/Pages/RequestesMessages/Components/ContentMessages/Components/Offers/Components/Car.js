function Car({ brand, structure_num }) {
  return (
    <div className="Car">
      <div className="text-center">{brand}</div>
      <div className="text-center">{structure_num}</div>
    </div>
  );
}

export default Car;
