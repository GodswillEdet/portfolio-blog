import styles from "./WatermarkHeader.module.scss";

interface WatermarkHeaderProps {
  text: string;
}

export const WatermarkHeader: React.FC<WatermarkHeaderProps> = ({ text, children }) => {
  return (
    <header className={styles.header}>
      {children}
      <div className={styles.watermark}>{text}</div>
    </header>
  );
};
