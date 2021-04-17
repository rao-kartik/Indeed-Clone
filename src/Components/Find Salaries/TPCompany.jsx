import React, { useEffect } from "react";
import styles from "./Salaries.module.css";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { CompContainer } from "../../Custom UI/RCustomUI";
import { getTopPayingComp } from "../../Redux/TopPayingCompanies/action";
import StarRatings from 'react-star-ratings';

function TPCompany() {
  const isLoading = useSelector((state) => state.topPayingComp.isLoading)
  const tpComp = useSelector((state) => state.topPayingComp.companies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopPayingComp());
  }, []);
  if (isLoading) {
    return null;
  }
  return (
    <div className={styles.tpComp}>
      <h1 style={{ marginTop: '3rem' }}>Browse top paying companies by industry</h1>
      <select name="" id="">
        <option value="">Choose an Industry</option>
      </select>
      <div className={styles.jobsContainer}>
        {tpComp &&
          tpComp.map((item) => {
            return (
              <Link className={styles.companyRoute} to={`/career/salaries/${item.id}`}> <CompContainer className={styles.compCard} key={item.id}>
                <div>
                  <img src={item.logo} alt="" />
                </div>
                <div>
                  <h4 style={{marginTop:'15px'}}>{item.name}</h4>
                  <div style={{display:'flex', marginTop:'10px', gap:'10px'}}>
                  <StarRatings
                    rating={item.stars}
                    starRatedColor="#6F6F6F"
                    starDimension='15px'
                    starSpacing='0px'
                    numberOfStars={5}
                  />
                  <p style={{fontSize:'12px', color:'grey'}}>{item.reviews}</p>
                  </div>
                </div>
              </CompContainer></Link>
            );
          })}
      </div>
    </div>
  );
}

export { TPCompany };
