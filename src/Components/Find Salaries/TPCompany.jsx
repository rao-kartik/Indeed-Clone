import React, { useEffect } from "react";
import styles from "./Salaries.module.css";
import { useDispatch, useSelector } from "react-redux";
import { CompContainer } from "../../Custom UI/RCustomUI";
import { getTopPayingComp } from "../../Redux/TopPayingCompanies/action";
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
      <h1 style={{marginTop:'3rem'}}>Browse top paying companies by industry</h1>
          <select name="" id="">
              <option value="">Choose an Industry</option>
          </select>
      <div className={styles.jobsContainer}>
        {tpComp &&
          tpComp.map((item) => {
            return (
                <CompContainer className={styles.compCard}>
                    <div>
                        <img src={item.logo} alt=""/>
                    </div>
                    <div>
                        <h3>{item.name}</h3>
                        <p>{item.reviews}</p>
                    </div>
              </CompContainer>
            );
          })}
      </div>
    </div>
  );
}

export { TPCompany };
