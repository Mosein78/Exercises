import React, { useState, useEffect, useRef } from "react";
import { TfiSearch } from "react-icons/tfi";
import styles from "./SearchBox.module.css";
import { useSearch } from "../../../hooks/useSearch";

function SearchBox() {
  const [search, setSearch] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const searchRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(search);
    }, 400);
    return () => clearTimeout(timeout);
  }, [search]);

  const { data, isLoading } = useSearch(debouncedValue);

  return (
    <div style={{ position: "relative" }} ref={searchRef}>
      <div className={styles.container}>
        <div className={styles.search}>
          <span>
            <TfiSearch />
          </span>

          <input
            type="text"
            placeholder="جستجو کالا"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className={styles.private}>
          <img src="http://localhost:5173/picture/images.png" alt="picture" />
          <div>
            <p>محمدحسین غلامی</p>
            <p>برنامه نویس</p>
          </div>
        </div>
      </div>

      {debouncedValue.length > 0 && (
        <div
          style={{
            position: "absolute", 
            top: "100%", 
            left: 0,
            right: 0,
            zIndex: 999, //
            background: "#fff",
            border: "1px solid #ddd",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            maxHeight: "300px",
            overflowY: "auto",
            
          }}
        >
          {isLoading && <p style={{ padding: "10px" }}>در حال جستجو...</p>}

          {!isLoading && data?.length === 0 && (
            <p style={{ padding: "10px" }}>چیزی پیدا نشد</p>
          )}

          {!isLoading &&
            data?.data?.map((p) => (
              <p
                key={p.id}
                style={{ padding: "10px", borderBottom: "1px solid #eee" }}
              >
                {p.name}
              </p>
            ))}
        </div>
      )}
    </div>
  );
}

export default SearchBox;
