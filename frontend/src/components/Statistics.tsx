import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../features/rootReducer";
import { getStatisticsStart } from "../features/statisticsSlice";

const Statistics: React.FC = () => {
  const dispatch = useDispatch();
  const statistics = useSelector(
    (state: RootState) => state.statistics.statistics
  );
  const loading = useSelector((state: RootState) => state.statistics.loading);

  useEffect(() => {
    dispatch(getStatisticsStart());
  }, [dispatch]);

  return (
    <div>
      <h2>Statistics</h2>
      {loading && <p>Loading...</p>}
      {!loading && statistics && (
        <div>
          <p>Total Songs: {statistics.totalSongs}</p>
          {/* Add more statistics here */}
        </div>
      )}
    </div>
  );
};

export default Statistics;
