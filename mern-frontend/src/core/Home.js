import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import kamenjeImg from './../assets/images/mistral.jpg';
import Menu from "./Menu";

const Home = () => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <Typography variant="h4" className={classes.title}>
                Home Page
            </Typography>
            <CardMedia className={classes.media} image={kamenjeImg} title="Neko kamenje" />
            <Typography variant="body2" components="p" className={classes.credit} color="textSecondary">
                Photo by Kamenje
            </Typography>
            <CardContent>
                <Typography variant="body1" component="p">
                    Welcome to the Memebership home page.
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Home;

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 600,
        margin: "auto",
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5)
    },
    title: {
        padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
        color: theme.palette.openTitle
    },
    media: {
        minHeight: 400
    },
    credit: {
        padding: 10,
        textAlign: "right",
        backgroundColor: "#ededed",
        borderBottom: "1px solid #d0d0d0",
        '& a': {
            color: "#3f4771"
        }
    }
}));