import { AppBar, Box, Card, CardContent, Container, CssBaseline, Toolbar, Typography } from '@mui/material';
import { Fragment } from 'react';

const QuizPage = () => {
    return (
        <>
            {/* Header */}
            <AppBar position="sticky" color="primary">
                <Toolbar>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                        Quiz App
                    </Typography>
                </Toolbar>
            </AppBar>

            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Card variant="outlined" sx={{ maxWidth: 1020 }}>
                        <Fragment>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Word of the Day
                                </Typography>
                                <Typography variant="h5" component="div">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, iure.
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    adjective
                                </Typography>
                                <Typography variant="body2">
                                    well meaning and kindly.
                                    <br />
                                    {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                        </Fragment>
                    </Card>

                </Box>
            </Container>
        </>
    );
};

export default QuizPage;;