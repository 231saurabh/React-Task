import React, { useState, useEffect } from 'react';
import { Container, Grid, Paper, Box, TableContainer, Table, TableBody, TableCell, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


//To get data from local storage
// const getDataItem = () => {
//     const patientName = localStorage.getItem('patient_name')
//     console.log(patientName)
//     if (patientName) {
//         return localStorage.getItem('patient_name')
//     } else {
//         return;
//     }
// }

const ContactForm = () => {
    const [patientName, setUserName] = useState('');   //useState(getDataItem())
    const [gender, setGender] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [married, setmarried] = useState('');
    const [addrtype, setAddrType] = useState('')
    const [mobnum, setNum] = useState();
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [permanentadd, setPermanentAdd] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            patientName, gender, startDate, married, addrtype, mobnum, email, address, permanentadd
        });
    };

    //Adding data to the local storage
    useEffect(() => {
        localStorage.setItem('Patient_name', JSON.stringify(patientName))
    }, [patientName])

    useEffect(() => {
        localStorage.setItem('Date', JSON.stringify(startDate))
    }, [startDate])

    useEffect(() => {
        localStorage.setItem('Mobile_num', JSON.stringify(mobnum))
    }, [mobnum])

    useEffect(() => {
        localStorage.setItem('Email', JSON.stringify(email))
    }, [email])

    return (
        <>
            <Container>
                <Grid container spacing={4}>
                    <Grid item lg={4}>
                        <Paper>
                            <Box p={3}>
                                <div>
                                    <img alt="Logo" />
                                    <h2>Patient Name</h2>
                                </div>
                                <div>
                                    <Button variant="outlined" fullWidth  >History</Button>
                                    <br /><br />
                                    <input type="text" placeholder="https://xd.adobe.com/" endIcon={<SearchIcon/>}/>
                                </div>

                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item lg={8}>
                        <Paper>
                            <Box p={3}>
                                {/* Section-1 */}
                                <h2>Primary Details :</h2>
                                <form onSubmit={handleSubmit}>
                                    <TableContainer>
                                        <Table>
                                            <TableBody>
                                                <TableCell>
                                                    <div>
                                                        <label htmlFor="patientName">Patient Name</label>
                                                        <input type="text" name="patientName" 
                                                        onChange={(e) => setUserName(e.target.value)} value={patientName} />
                                                    </div><br />
                                                    <div >
                                                        <label htmlFor="patientName">Select Gender</label>
                                                        <input type="radio" name="male" onChange={(e) => setGender(e.target.value)} value={gender} />
                                                        <label htmlFor="male">Male</label>

                                                        <input type="radio" name="male" onChange={(e) => setGender(e.target.value)} />
                                                        <label htmlFor="female">Female</label>

                                                        <input type="radio" name="male" onChange={(e) => setGender(e.target.value)} />
                                                        <label htmlFor="other">Other</label>
                                                    </div><br />
                                                    <div>
                                                        <label htmlFor="patientName">Marital Status</label>
                                                        <input type="radio" name="married" onChange={(e) => setmarried(e.target.value)} value={married} />
                                                        <label htmlFor="married">Married</label>
                                                        <input type="radio" name="unmarried" onChange={(e) => setmarried(e.target.value)} />
                                                        <label htmlFor="unmarried">Unmarried</label>
                                                    </div><br />
                                                    <div>
                                                        <label htmlFor="number">Mobile number</label>
                                                        <input type="number" name="mobnum" onChange={(e) => setNum(e.target.value)} value={mobnum} />
                                                    </div>

                                                </TableCell>
                                                <TableCell><br />
                                                    <div>
                                                        <label htmlFor="email">Date of Birth</label>
                                                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

                                                    </div><br />
                                                    <div>
                                                        <label htmlFor="patientName">Occupation</label>
                                                        <select defaultValue={addrtype} onChange={(e) => setAddrType(e.target.value)}>
                                                            <option value="1">Professor</option>
                                                            <option value="2">Teacher</option>
                                                            <option value="3">Farmer</option>
                                                            <option value="4">Other</option>
                                                        </select>
                                                    </div><br />
                                                    <div>
                                                        <label htmlFor="email">Email Address</label>
                                                        <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                                                    </div>
                                                </TableCell>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>

                                    {/* Section-2 */}
                                    <h2>Communication Details :</h2>
                                    <TableContainer>
                                        <Table>
                                            <TableBody>
                                                <TableCell>
                                                    <label htmlFor="address">Temprory Address</label>
                                                    <input type="text" name="address" onChange={(e) => setAddress(e.target.value)} value={address} />
                                                </TableCell>
                                                <TableCell>
                                                    <input type="checkbox" /><label>Copy Temprory Address</label><br />
                                                    <label htmlFor="permanentadd">Permanent Address</label>
                                                    <input type="text" name="permanentadd" onChange={(e) => setPermanentAdd(e.target.value)} value={permanentadd} />
                                                </TableCell>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>

                                    <Button color="secondary"  variant="contained" type="submit">submit</Button>
                                </form>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default ContactForm;
