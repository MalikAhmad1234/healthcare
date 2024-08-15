import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import "./SearchBar.scss";
import SearchIcon from "@mui/icons-material/Search";
import jobimage from "../../Assets/logo.png";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import employeename from "../../Assets/employeename.PNG";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import warningicon from '../../Assets/icons/warning.png';
import Pagination from "@mui/material/Pagination";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
const SearchBar = (props) => {
  const screenWidth = window.innerWidth;
  const [Job, setJob] = useState("");
  const [location, setlocation] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const jobtitle = props.job;
  const specialty = props.specialty;
  const cityState = props.cityState;
  const [open, setopen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [jobdata, setjobdata] = useState();
  const [expandcard, setexpandcard] = useState(null);
  const [selectedCityState, setSelectedCityState] = useState("");
  const [opendialog, setOpendialog] = React.useState(false);
  const [page, setPage] = useState(1);
  const [topJobTitles, settopJobTitles] = useState()
  const [jobCounts, setJobCounts] = useState({});
  const [topEmployers, setTopEmployers] = useState([]);
  const jobsPerPage = 7;

  useEffect(() => {
    const alljobsdata = sessionStorage.getItem("jobsData");
    if (alljobsdata) {
      const jobsdata = JSON.parse(alljobsdata);
      setjobdata(jobsdata);
      console.log(jobsdata)
    }
  }, []);
  useEffect(() => {
    if (props && jobdata) {
      const filteredata = jobdata.filter((jobItem) => {
        const searchQuery = props.job.toLowerCase(); // Convert search query to lowercase
        const jobTitle = jobItem.Title__c ? jobItem.Title__c.toLowerCase() : null; // Convert job title to lowercase
        const MSG_Specialty__c = jobItem.MSG_Specialty__c ? jobItem.MSG_Specialty__c.toLowerCase() : null;
        const EmployeerName = jobItem.MSG_Employer_Name__c ? jobItem.MSG_Employer_Name__c.toLowerCase() : null;
        return (
          jobTitle ? jobTitle.includes(searchQuery) : null || MSG_Specialty__c ? MSG_Specialty__c.includes(searchQuery) : null || EmployeerName ? EmployeerName.includes(searchQuery) : null
        );
      });
      if (filteredata.length > 0) {

        setFilteredJobs(filteredata);
      }
      else {
        setOpendialog(true)

      }
    }

  }, [props, jobdata]);
  useEffect(() => {
    if (jobdata) {
      const jobCountByTitle = jobdata.reduce((acc, job) => {
        const title = job.Title__c;
        if (acc[title]) {
          acc[title]++;
        } else {
          acc[title] = 1;
        }
        return acc;
      }, {});
      settopJobTitles(Object.entries(jobCountByTitle)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5));
    }

  }, [jobdata])
  useEffect(() => {
    if (jobdata) {
      // Count job postings by employer
      const counts = jobdata.reduce((acc, job) => {
        if (job.MSG_Employer_Name__c) {
          acc[job.MSG_Employer_Name__c] = (acc[job.MSG_Employer_Name__c] || 0) + 1;
        }
        return acc;
      }, {});
      setJobCounts(counts);
      // Get the top 5 employers with the most job postings
      const sortedEmployers = Object.keys(counts)
        .sort((a, b) => counts[b] - counts[a])
        .slice(0, 5)
        .map(employer => ({
          name: employer,
          count: counts[employer],
        }));
      setTopEmployers(sortedEmployers);
    }
  })
  const handleCityStateChange = (event) => {
    setSelectedCityState(event.target.value);
  };
  const onclickmoreDetails = (id) => {
    if (expandcard !== id) {
      setexpandcard(id);
      handleClick(id);
    }
  };
  const handleClose = () => {
    setOpendialog(false);
  };
  const onclicklessDetails = () => {
    setexpandcard(null);
    setSelectedJob(null);
  };
  const handlepagination = (event, value) => {
    setPage(value);
  };
  const startIndex = (page - 1) * jobsPerPage;
  const endIndex = page * jobsPerPage;
  const handleClick = (id) => {
    const job = jobdata.find((job) => job.Id === id);
    setSelectedJob(job);
    setopen(true);
  };
  useEffect(() => {
    setJob(props.job);
    setlocation(props.cityState);
  }, [props]);
  const onjobchange = (event) => {
    setJob(event.target.value);
  };
  const handleclose = () => {
    setopen(false);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onSearchClick();
    }
  };
  const onSearchClick = () => {
    if (jobdata) {
      const filteredJobs = jobdata.filter((jobItem) => {
        const searchQuery = Job.toLowerCase(); // Convert search query to lowercase
        const jobTitle = jobItem.Title__c ? jobItem.Title__c.toLowerCase() : null; // Convert job title to lowercase
        const MSG_Specialty__c = jobItem.MSG_Specialty__c ? jobItem.MSG_Specialty__c.toLowerCase() : null;
        const EmployeerName = jobItem.MSG_Employer_Name__c ? jobItem.MSG_Employer_Name__c.toLowerCase() : null;

        return (
          jobTitle ? jobTitle.includes(searchQuery) : null || MSG_Specialty__c ? MSG_Specialty__c.includes(searchQuery) : null || EmployeerName ? EmployeerName.includes(searchQuery) : null
        );
      });
      if (filteredJobs.length > 0) {
        setFilteredJobs(filteredJobs);
      }
      else {
        setOpendialog(true)
      }
    } else {
      setOpendialog(true)
    }
  };
  return (
    <>
      <Grid
        container
        spacing={0}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
          margin: "auto",
          maxWidth: "1285px",
        }}
      >
        <Grid
          container
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Grid item xs={12} md={12} sx={{ marginBottom: "1%" }}>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                height: 60,
                borderRadius: "20px",
                backgroundColor: "#f4f4f4",
                border: "1px solid #d5d5d5",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search with keywords, location, company"
                inputProps={{ "aria-label": "search google maps" }}
                value={Job}
                onChange={onjobchange}
                onKeyPress={handleKeyPress}
              />
              <IconButton
                type="button"
                sx={{ p: "10px" }}
                aria-label="search"
                onClick={onSearchClick}
              >
                <SearchIcon />
              </IconButton>
            </Paper>
          </Grid>
        </Grid>
        {
          topJobTitles ?
            <Grid
              container
              spacing={1}
              sx={{ display: "flex", flexWrap: "wrap" }}
            >

              {topJobTitles.map(([title, count], index) => (
                <Grid item xs={12} sm={6} md={2.4} key={index}>
                  <Paper
                    sx={{
                      p: "20px",
                      height: 120,
                      borderRadius: "20px",
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: "center"
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ color: "#202020", fontWeight: "600", fontSize: '1rem' }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ color: "#202020", fontWeight: "400", fontSize: '1.1rem' }}
                    >
                      {count} jobs
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid> : null
        }

        <Grid item xs={12}>
          <Typography
            variant="h4"
            sx={{
              color: "#4eb3e8",
              marginBottom: "2%",
              marginTop: "7%",
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            FEATURED EMPLOYEE
          </Typography>
          {topEmployers ?
            <Grid
              container
              spacing={1}
              sx={{ display: "flex", flexWrap: "wrap" }}
            >
              {topEmployers.map((employer, index) => (
                <Grid item xs={12} sm={6} md={2.4} key={index}>
                  <Paper
                    sx={{
                      p: "20px",
                      textAlign: "center",
                      height: 150,
                      borderRadius: "20px",
                      backgroundColor: "#f4f4f4",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <img src={employeename} style={{ padding: "10px" }}></img>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ color: "#202020", fontWeight: "600" }}
                    >
                      {employer.name}
                    </Typography>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ color: "#202020", fontWeight: "400" }}
                    >
                      {employer.count} jobs
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid> : null}

          {filteredJobs.length > 0 ? (
            <Grid
              container
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              {screenWidth > 600 ? (
                <Grid item xs={6.5}>
                  {filteredJobs
                    .slice(startIndex, endIndex)
                    .map((job, index) => (
                      <Grid
                        item
                        sm={12}
                        md={24}
                        lg={12}
                        key={index}
                        sx={{ marginTop: "3%" }}
                      >
                        <Card
                          sx={{
                            marginTop: "3%",
                            borderRadius: "20px",
                            padding: "2%",
                            backgroundColor: "#f4f4f4",
                            border: "1px solid #d5d5d5",
                            cursor: "pointer",
                          }}
                          onClick={() => handleClick(job.Id)}
                        >
                          <CardContent
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              height: "100%",
                            }}
                          >
                            <div>
                              <Typography
                                variant="h5"
                                component="h2"
                                gutterBottom
                                sx={{
                                  fontSize: {
                                    xs: "0.7rem",
                                    sm: "1rem",
                                    md: "1.5rem",
                                  },
                                }}
                              >
                                {job.Title__c}
                              </Typography>
                              <Typography
                                variant="subtitle1"
                                color="textSecondary"
                                gutterBottom
                                sx={{
                                  fontSize: {
                                    xs: "0.9rem",
                                    sm: "0.9rem",
                                    md: "1.1rem",
                                  },
                                }}
                              >
                                {job.MSG_Job_Type__c}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="textSecondary"
                                gutterBottom
                                sx={{
                                  fontSize: {
                                    xs: "0.8rem",
                                    sm: "0.7rem",
                                    md: "0.9rem",
                                  },
                                }}
                              >
                                {job.MSG_Street_Address__c}'{job.MSG_City__c}'
                              </Typography>
                              <Typography
                                variant="body1"
                                gutterBottom
                                sx={{
                                  marginTop: "3em",
                                  fontSize: {
                                    xs: "0.9rem",
                                    sm: "0.9rem",
                                    md: "1.1rem",
                                  },
                                  display: '-webkit-box',
                                  WebkitLineClamp: 4,
                                  WebkitBoxOrient: 'vertical',
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                }}
                              >
                                {job.MSG_Job_Description_Rich__c ? job.MSG_Job_Description_Rich__c : "Seeking an experienced Administrator to oversee daily operations and ensure organizational efficiency. Responsibilities include managing schedules, coordinating meetings, and handling administrative tasks. The ideal candidate will possess strong communication skills and attention to detail."}
                              </Typography>
                            </div>
                            <Grid
                              sx={{
                                marginTop: "5%",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
                              <Grid
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                <Typography
                                  variant="h6"
                                  gutterBottom
                                  sx={{
                                    fontWeight: "600",
                                    color: "#4eb3e8",
                                    fontSize: {
                                      xs: "0.9rem",
                                      sm: "0.9rem",
                                      md: "1.0rem",
                                    },
                                  }}
                                >
                                  {job.MSG_Country__c ? job.MSG_Country__c : "USA"} (Remote)
                                </Typography>
                                <Typography
                                  variant="h6"
                                  gutterBottom
                                  sx={{
                                    fontWeight: "600",
                                    color: "#4eb3e8",
                                    fontSize: {
                                      xs: "0.9rem",
                                      sm: "0.9rem",
                                      md: "1.0rem",
                                    },
                                    marginLeft: "20px",
                                  }}
                                >
                                  {job.MSG_Employer_Est_Pay__c}$
                                </Typography>
                              </Grid>
                              <Grid
                                sx={{ display: "flex", justifyContent: "end" }}
                              >
                                <Link to="/applyjob" state={{ selectjob: job }}>
                                  <Button
                                    variant="contained"
                                    sx={{
                                      background:
                                        "linear-gradient(-130deg, #71ba32 0%, #4eb3e8 100%)",
                                      width: {
                                        xs: "160px",
                                        sm: "180px",
                                        md: "200px",
                                      },
                                      height: "66px",
                                      borderRadius: "19px",
                                      padding: "5px",
                                      color: "#ffffff",
                                      border: "none",
                                      fontSize: {
                                        xs: "0.6rem",
                                        sm: "0.8rem",
                                        md: "1rem",
                                      },
                                    }}
                                  >
                                    Apply Now
                                  </Button>
                                </Link>
                              </Grid>
                            </Grid>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      marginTop: "3%",
                      justifyContent: "center",
                    }}
                  >
                    <Pagination
                      count={Math.ceil(filteredJobs.length / jobsPerPage)}
                      page={page}
                      onChange={handlepagination}
                      color="primary"
                      size="large"
                      shape="rounded"
                    />
                  </Grid>
                </Grid>
              )
                :
                (
                  <Grid item xs={12}>
                    {filteredJobs
                      .slice(startIndex, endIndex)
                      .map((job, index) => (
                        <Grid
                          item
                          sm={12}
                          md={24}
                          lg={12}
                          key={index}
                          sx={{ marginTop: "3%" }}
                        >
                          <Card
                            sx={{
                              marginTop: "3%",
                              borderRadius: "20px",
                              padding: "2%",
                              backgroundColor: "#f4f4f4",
                              border: "1px solid #d5d5d5",
                              cursor: "pointer",
                            }}
                            onClick={() => handleClick(job.Id)}
                          >
                            <CardContent
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                height: "100%",
                              }}
                            >
                              <div>
                                <Typography
                                  variant="h5"
                                  component="h2"
                                  gutterBottom
                                  sx={{
                                    fontSize: {
                                      xs: "0.7rem",
                                      sm: "1rem",
                                      md: "1.5rem",
                                    },
                                  }}
                                >
                                  {job.Title__c}
                                </Typography>
                                <Typography
                                  variant="subtitle1"
                                  color="textSecondary"
                                  gutterBottom
                                  sx={{
                                    fontSize: {
                                      xs: "0.9rem",
                                      sm: "0.9rem",
                                      md: "1.1rem",
                                    },
                                  }}
                                >
                                  {job.MSG_Job_Type__c}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="textSecondary"
                                  gutterBottom
                                  sx={{
                                    fontSize: {
                                      xs: "0.8rem",
                                      sm: "0.7rem",
                                      md: "0.9rem",
                                    },
                                  }}
                                >
                                  {job.MSG_Street_Address__c}'{job.MSG_City__c}'
                                </Typography>
                                <Typography
                                  variant="body1"
                                  gutterBottom
                                  sx={{
                                    marginTop: "3em",
                                    fontSize: {
                                      xs: "0.9rem",
                                      sm: "0.9rem",
                                      md: "1.1rem",
                                    },
                                    display: '-webkit-box',
                                    WebkitLineClamp: 4,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                  }}
                                >
                                  {job.MSG_Job_Description_Rich__c ? job.MSG_Job_Description_Rich__c : "Seeking an experienced Administrator to oversee daily operations and ensure organizational efficiency. Responsibilities include managing schedules, coordinating meetings, and handling administrative tasks. The ideal candidate will possess strong communication skills and attention to detail."}
                                </Typography>
                                {expandcard === job.Id ? (
                                  <Button
                                    onClick={onclicklessDetails}
                                    variant="text"
                                    gutterBottom
                                    sx={{
                                      marginTop: "1em",
                                      fontSize: {
                                        xs: "0.8rem",
                                        sm: "0.7rem",
                                        md: "0.9rem",
                                      },
                                      textDecoration: "underline",
                                    }}
                                  >
                                    Less Details <KeyboardDoubleArrowUpIcon />
                                  </Button>
                                ) : (
                                  <Button
                                    onClick={() => onclickmoreDetails(job.Id)}
                                    variant="text"
                                    gutterBottom
                                    sx={{
                                      marginTop: "1em",
                                      fontSize: {
                                        xs: "0.8rem",
                                        sm: "0.7rem",
                                        md: "0.9rem",
                                      },
                                      textDecoration: "underline",
                                    }}
                                  >
                                    More Details <KeyboardDoubleArrowDownIcon />
                                  </Button>
                                )}
                              </div>
                              {expandcard === job.Id && selectedJob ? (
                                <CardContent
                                  sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "100%",
                                  }}
                                >
                                  {" "}
                                  <Typography
                                    variant="h5"
                                    component="h2"
                                    gutterBottom
                                  >
                                    {selectedJob.MSG_Country__c ? selectedJob.MSG_Country__c : "USA"}
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    gutterBottom
                                  >
                                    {selectedJob.Id}
                                  </Typography>{" "}
                                  <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    gutterBottom
                                  >
                                    {selectedJob.MSG_Job_Type__c}| Job ID :{" "}
                                    {selectedJob.Id}
                                  </Typography>{" "}
                                  <CardMedia
                                    component="img"
                                    image={jobimage}
                                    alt="Image"
                                    sx={{
                                      borderRadius: "20px",
                                      marginTop: "1em",
                                      objectFit: "contain",
                                    }}
                                  />{" "}
                                  <div style={{ flexGrow: 1, marginTop: "5%" }}>
                                    {" "}
                                    <Typography
                                      variant="subtitle1"
                                      color="textSecondary"
                                      gutterBottom
                                    >
                                      <Typography
                                        variant="subtitle1"
                                        color="textSecondary"
                                        gutterBottom
                                      >
                                        State : {selectedJob.MSG_State__c}
                                      </Typography>
                                      
                                      <Typography
                                        variant="subtitle1"
                                        color="textSecondary"
                                        gutterBottom
                                      >
                                        Description: {selectedJob.MSG_Job_Description_Rich__c}
                                      </Typography>
                                      City: {selectedJob.MSG_City__c}
                                    </Typography>
                                    <Typography
                                      variant="subtitle1"
                                      color="textSecondary"
                                      gutterBottom
                                    >
                                      Postal Code: {selectedJob.MSG_Postal_Code__c}
                                    </Typography>
                                    <Typography
                                      variant="subtitle1"
                                      color="textSecondary"
                                      gutterBottom
                                    >
                                      Address: {selectedJob.MSG_Street_Address__c}
                                    </Typography>

                                    <Typography
                                      variant="subtitle1"
                                      color="textSecondary"
                                      gutterBottom
                                    >
                                      Company Name :{selectedJob.MSG_Employer_Name__c}
                                    </Typography>
                                    <Typography
                                      variant="subtitle1"
                                      color="textSecondary"
                                      gutterBottom
                                    >
                                      Company Website :  {selectedJob.MSG_Employer_Website__c}
                                    </Typography>
                                  </div>
                                </CardContent>
                              ) : null}
                              <Grid
                                sx={{
                                  marginTop: "5%",
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                }}
                              >
                                <Grid
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <Typography
                                    variant="h6"
                                    gutterBottom
                                    sx={{
                                      fontWeight: "600",
                                      color: "#4eb3e8",
                                      fontSize: {
                                        xs: "0.9rem",
                                        sm: "0.9rem",
                                        md: "1.0rem",
                                      },
                                    }}
                                  >
                                    {job.MSG_Country__c ? job.MSG_Country__c : "USA"} (Remote)
                                  </Typography>
                                  <Typography
                                    variant="h6"
                                    gutterBottom
                                    sx={{
                                      fontWeight: "600",
                                      color: "#4eb3e8",
                                      fontSize: {
                                        xs: "0.9rem",
                                        sm: "0.9rem",
                                        md: "1.0rem",
                                      },
                                      marginLeft: "20px",
                                    }}
                                  >
                                    {job.MSG_Employer_Est_Pay__c}$
                                  </Typography>
                                </Grid>
                                <Grid
                                  sx={{ display: "flex", justifyContent: "end" }}
                                >
                                  <Link to="/applyjob" state={{ selectjob: job }}>
                                    <Button
                                      variant="contained"
                                      sx={{
                                        background:
                                          "linear-gradient(-130deg, #71ba32 0%, #4eb3e8 100%)",
                                        width: {
                                          xs: "160px",
                                          sm: "180px",
                                          md: "200px",
                                        },
                                        height: "66px",
                                        borderRadius: "19px",
                                        padding: "5px",
                                        color: "#ffffff",
                                        border: "none",
                                        fontSize: {
                                          xs: "1rem",
                                          sm: "0.8rem",
                                          md: "1rem",
                                        },
                                      }}
                                    >
                                      Apply Now
                                    </Button>
                                  </Link>
                                </Grid>
                              </Grid>
                            </CardContent>
                          </Card>
                        </Grid>
                      ))}
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        marginTop: "3%",
                        justifyContent: "center",
                      }}
                    >
                      <Pagination
                        count={Math.ceil(filteredJobs.length / jobsPerPage)}
                        page={page}
                        onChange={handlepagination}
                        color="primary"
                        size="large"
                        shape="rounded"
                      />
                    </Grid>
                  </Grid>
                )}
              {open && selectedJob && screenWidth > 600 ? (
                <Grid item xs={5.2}>
                  <Grid
                    item
                    xs={12}
                    sm={24}
                    md={24}
                    lg={12}
                    sx={{ marginTop: "3%", position: 'sticky', top: "1rem" }}
                  >
                    <Card
                      sx={{
                        marginTop: "3%",
                        borderRadius: "20px",
                        padding: "2%",
                        backgroundColor: "#f4f4f4",
                        border: "1px solid #d5d5d5",

                      }}
                    >
                      <CardContent
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          height: "100%",
                        }}
                      >
                        <Typography variant="h5" component="h2" gutterBottom>
                          {selectedJob.MSG_Country__c ? selectedJob.MSG_Country__c : "USA"}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          gutterBottom
                        >
                          {selectedJob.Title__c}
                        </Typography>{" "}
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          gutterBottom
                        >
                          {selectedJob.MSG_Specialty__c}| Job ID :{" "}
                          {selectedJob.Id}
                        </Typography>{" "}
                        <CardMedia
                          component="img"
                          image={jobimage}
                          alt="Image"
                          sx={{
                            borderRadius: "20px",
                            marginTop: "1em",
                            objectFit: "contain",
                          }}
                        />{" "}
                        <div style={{ flexGrow: 1, marginTop: "5%" }}>
                          {" "}
                          <Typography
                            variant="subtitle1"
                            color="textSecondary"
                            gutterBottom
                          >
                              <Typography
                              variant="subtitle1"
                              color="textSecondary"
                              gutterBottom
                            >
                              Description: {selectedJob.MSG_Job_Description_Rich__c}
                            </Typography>
                            <Typography
                              variant="subtitle1"
                              color="textSecondary"
                              gutterBottom
                            >
                              State : {selectedJob.MSG_State__c}
                            </Typography>
                            City: {selectedJob.MSG_City__c}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            color="textSecondary"
                            gutterBottom
                          >
                            Postal Code: {selectedJob.MSG_Postal_Code__c}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            color="textSecondary"
                            gutterBottom
                          >
                            Address: {selectedJob.MSG_Street_Address__c}
                          </Typography>

                          <Typography
                            variant="subtitle1"
                            color="textSecondary"
                            gutterBottom
                          >
                            Company Name :{selectedJob.MSG_Employer_Name__c}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            color="textSecondary"
                            gutterBottom
                          >
                            Company Website :  {selectedJob.MSG_Employer_Website__c}
                          </Typography>


                        </div>{" "}
                        <div
                          style={{
                            marginTop: "5%",
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          {" "}
                          <Link to="/applyjob" state={{ selectjob: selectedJob }}>
                            <Button
                              variant="contained"
                              sx={{
                                background:
                                  "linear-gradient(-130deg, #71ba32 0%, #4eb3e8 100%)",
                                width: { xs: "250px", sm: "300px", md: "230px" },
                                height: "66px",
                                borderRadius: "19px",
                                padding: "5px",
                                color: "#ffffff",
                                border: "none",
                                fontSize: {
                                  xs: "0.7rem",
                                  sm: "1rem",
                                  md: "1.1rem",
                                },
                              }}
                            >
                              Apply Now
                            </Button>
                          </Link>
                          <Button
                            onClick={handleclose}
                            variant="outlined"
                            sx={{
                              background: "transparent",
                              width: { xs: "250px", sm: "300px", md: "230px" },
                              height: "66px",
                              borderRadius: "19px",
                              padding: "5px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "black",
                              border: "1px solid grey",
                              fontSize: {
                                xs: "0.7rem",
                                sm: "1rem",
                                md: "1.1rem",
                              },
                              // marginTop : {sm : '4%',xs:'4%' , md :'0%'}
                            }}
                          >
                            Cancel Job
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              )
                :
                null}
            </Grid>
          ) : (
            <>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: { xs: "2rem", sm: "2rem", md: "3rem" },
                    marginTop: "3rem",
                  }}
                >
                  No Jobs availaible
                </Typography>
              </Grid>
              <Dialog

                fullWidth
                open={opendialog}
                onClose={handleClose}

              >
                <Grid container xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img src={warningicon} height={'150px'} width={'150px'}></img>
                </Grid>
                <DialogTitle sx={{ textAlign: 'center', fontSize: '1.5rem' }}>No Jobs found</DialogTitle>

                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>

                </DialogActions>
              </Dialog>
            </>
          )}
        </Grid>{" "}
      </Grid>{" "}
    </>
  );
};
export default SearchBar;