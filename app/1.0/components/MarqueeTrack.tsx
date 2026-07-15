import { iconUrl } from '../utils/iconUtils';
import styles from './TechStackSection.module.css'
import { TechItem } from './types';


// New component for the marquee track
export default function MarqueeTrack({ items, rowTitle, reverse = false }: { items: TechItem[], rowTitle: string, reverse?: boolean }) {
    return (
        <div className={`${styles['marquee-track']} ${reverse ? styles['reverse'] : ''}`}>
            {[...items, ...items].map((item, index) => (
                <div className={styles['tech-item']} key={`${rowTitle}-${item.name}-${index}`}>
                    <span
                        className={styles['tech-logo']}
                        role="img"
                        aria-label={`${item.name} logo`}
                        style={{ backgroundImage: `url(${iconUrl(item.logoSrc)})` }}
                    />
                    <span className={styles['tech-name']}>{item.name}</span>
                </div>
            ))}
        </div>
    );
}
