import styles from './styles.module.css'
import Image from 'next/image'
import { AnimalType } from '@/app/types/animalType'
import { animals } from '@/app/data/data'


const AnimalDisplay = () => {
    return(
        <div className={styles.animalContainer}>
            {animals.map((item:AnimalType, index:number) => (
                <div key={index}>
                    <Image src={item.image} alt='animal' width={300} height={300} priority/>
                </div>
            ))}
        </div>
    )
}

export default AnimalDisplay