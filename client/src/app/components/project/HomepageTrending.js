import ShowTrending from './ShowTrending';
import styles from './ShowTrending.module.scss';


const HomepageTrending = () => {
  

  return (
    <div>
      <h2 className={styles.trendingTitlte}>Trending</h2>
      <ShowTrending />
    </div>
  )
}

export default HomepageTrending
