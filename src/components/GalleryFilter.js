import React, { useState, useContext, useRef, useEffect } from "react";
import { useFormik } from "formik";
import "@fontsource/roboto";
import {
  Button,
  FormControl,
  FormControlLabel,
  Checkbox,
  FormGroup,
  ButtonGroup,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";

import Alert from "@material-ui/lab/Alert";
import MyContext from "../context/MyContext";

export default function GalleryFilter({ filter }) {
  const [error, setError] = useState(null);
  const { filteredData, setFilteredData } = useContext(MyContext);

  /**
   * Define the Form for FORMIK
   */
  const formik = useFormik({
    initialValues: {
      type: "all",
      age: "",
      favorites: false,
    },
    onSubmit: async (values) => {
      alert (JSON.stringify (values, null, 2));
      setError(null);

      //alert(JSON.stringify(values, null, 2))
      try {
        const userId = JSON.parse(localStorage.getItem("userId"));
        // process.env.REACT_APP_BACKEND_URL
        // http://localhost:4000/
        const response = await fetch(
          process.env.REACT_APP_BACKEND_URL +
            `pets/filter?type=${formik.values.type}&age=${JSON.stringify(
              formik.values.age
            )}&favorites=${JSON.stringify(formik.values.favorites)}&userId=${
              userId ? userId : ""
            }`,
          {
            method: "GET",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();

        setFilteredData(data.data);

        if (!data.success) {
          setError(data.message);
        }
      } catch (err) {
      }
    },
  });

  const toggleDropdown = (filterType, className = "filter-dropdown-hidden") => {
    const dropdown = document.getElementById(filterType);

    //change classes for visible and hide dropdown
    if (dropdown.classList.contains(className)) {
      dropdown.classList.remove(className);
    } else {
      dropdown.classList.add(className);
    }
  };

  useEffect(() => {

    const getFirstGalleryData = async () => {
      try {
        const userId = JSON.parse(localStorage.getItem("userId"));

        // process.env.REACT_APP_BACKEND_URL
        // http://localhost:4000/
        const response = await fetch(
          process.env.REACT_APP_BACKEND_URL +
            `pets/filter?type=${filter || "all"}&favorites=false&userId=${
              userId ? userId : ""
            }`,
          {
            method: "GET",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();

        setFilteredData(data.data);

        if (!data.success) {
          setError(data.message);
        } 

      } catch (err) {
      }
    };

    getFirstGalleryData();
  }, []);

  return (
    <div className="dusan">
      <FilterElementAll
        filterText={"All Filters"}
        toggleDropdown={toggleDropdown}
      />
      <form
        id="filter"
        className="filter-dropdown-overlay filter-dropdown-hidden"
      >
        <div className="filterContainer">
          <FilterElementType
            filterText={"Type"}
            formik={formik}
            toggleDropdown={toggleDropdown}
          />

          <FilterElementAge
            filterText={"Age"}
            toggleDropdown={toggleDropdown}
            formik={formik}
          />

          <FilterFavorites filterText={""} formik={formik} />
          <div className="filter-button">
            <Button
              className="clear-btn"
              disableElevation
              color="gray"
              variant="contained"
              type="submit"
              onClick={() => {
                formik.values.type = "all";
                formik.values.age = "";
                formik.values.favorites = false;
                toggleDropdown("filter");
              }}
            >
              Clear
            </Button>
            <Button
              disableElevation
              color="primary"
              variant="contained"
              type="submit"
              onClick={(e) => {
                e.preventDefault(); // because it refreshes the page and filter is not working anymore
                formik.handleSubmit();
                toggleDropdown("filter");
              }}
            >
              Set Filter
            </Button>
          </div>
        </div>
        {error ? <Alert severity="error">{error}</Alert> : null}
      </form>
    </div>
  );
}

function FilterElementType({ filterText, toggleDropdown, formik }) {
  const [selectedBtn, setSelectedBtn] = useState(1);

  return (
    <div>
      <ButtonGroup
        disableElevation
        color="primary"
        aria-label="outlined primary button group"
        size="large"
        variant="outlined"
      >
        <Button
          id="all"
          color={selectedBtn === 1 ? "secondary" : "primary"}
          value={"all"}
          onClick={() => {
            setSelectedBtn(1);
            formik.values.type = "all";
          }}
        >
          All
        </Button>
        <Button
          id="dog"
          color={selectedBtn === 2 ? "secondary" : "primary"}
          value={"dog"}
          onClick={() => {
            setSelectedBtn(2);
            formik.values.type = "dog";
          }}
        >
          Dogs
        </Button>
        <Button
          id="cat"
          color={selectedBtn === 3 ? "secondary" : "primary"}
          value={"cat"}
          onClick={() => {
            setSelectedBtn(3);
            formik.values.type = "cat";
          }}
        >
          Cats
        </Button>
        <Button
          id="other"
          color={selectedBtn === 4 ? "secondary" : "primary"}
          name="other"
          value={"other"}
          onClick={() => {
            setSelectedBtn(4);
            formik.values.type = "others";
          }}
        >
          Others
        </Button>
      </ButtonGroup>
    </div>
  );
}

function FilterElementAge({ filterText, formik }) {

  const ref = useRef();

  const toggleDropdown = () => {
    const dropdown = document.getElementById("filterAge");

    //change classes for visible and hide dropdown
    if (dropdown.classList.contains("filter-dropdown-hidden")) {
      dropdown.classList.remove("filter-dropdown-hidden");

    } else {
      dropdown.classList.add("filter-dropdown-hidden");

    }
  };

  const ageOptions = [
    {
      label: "Baby (0-6 months)",
      value: "baby",
    },
    {
      label: "Young (6-12 months)",
      value: "young",
    },
    {
      label: "Adult (1-7 years)",
      value: "adult",
    },
    {
      label: "Senior (7+ years)",
      value: "senior",
    },
  ];


  return (
    <div className="filterElement" ref={ref}>
      <span
        onClick={() => {
          toggleDropdown();
        }}
      >
        <span className="">{filterText}</span>
        <i className="fas fa-chevron-down filtericon"></i>{" "}
      </span>
      <div id="filterAge" className="dropdown filter-dropdown-hidden">
        <FormControl component="fieldset">
          <FormGroup>
            {ageOptions.map((opt) => (
              <FormControlLabel
                id={opt.value}
                value={opt.value}
                control={<Checkbox name="age" />}
                label={opt.label}
                onChange={formik.handleChange}
              />
            ))}
          </FormGroup>
        </FormControl>
      </div>
    </div>
  );
}

function FilterElementAll({ filterText, filterData, toggleDropdown }) {
  return (
    <div
      className="filterElement filterElement-white"
      onClick={() => {
        toggleDropdown("filter", "filter-dropdown-hidden");
      }}
    >
      <span>
        {filterText} <i class="fas fa-sliders-h filtericon"></i>{" "}
      </span>
    </div>
  );
}

function FilterFavorites({ filterText, formik }) {
  const [likeIcon, setLikeIcon] = useState("black");
  const { login, setLogin } = useContext(MyContext);
  const [open, setOpen] = useState(false);
  const iconStyleFilled = "far fa-heart";
  const iconStyleBorder = "fas fa-heart";

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const toggle = (status) => {

    if (status) return false;
    if (!status) return true;
  };

  const normalFunctionality = () => {
    formik.values.favorites = toggle(formik.values.favorites);

    formik.values.favorites === false
      ? setLikeIcon("black")
      : setLikeIcon("#f76c6c");
  };

  return (
    <>
      <div
        onClick={login ? normalFunctionality : handleClickOpen}
        className="filterElement"
      >
        <span className="">{filterText}</span>

        <i
          className={likeIcon === "black" ? iconStyleFilled : iconStyleBorder}
          style={{ color: likeIcon }}
        ></i>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Join Pawfect to favorite pets"}
        </DialogTitle>
        <DialogContent>
          <Button
            variant="contained"
            sx={{ margin: 3 }}
            color="primary"
            href="/registration"
          >
            Create new Account
          </Button>

          <DialogContentText id="alert-dialog-description">
            Already have an account?
          </DialogContentText>
          <Button variant="outlined" color="primary" href="/login">
            Login
          </Button>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpen(false);
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
