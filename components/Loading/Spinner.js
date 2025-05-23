// components/Loader/Spinner.js
import './Spinner.css';

export default function Spinner({ size = '2rem', color = '#6b4e1f' }) {
  return (
    <div
      className="spinner"
      style={{ width: size, height: size, borderColor: `${color} transparent ${color} transparent` }}
    />
  );
}
