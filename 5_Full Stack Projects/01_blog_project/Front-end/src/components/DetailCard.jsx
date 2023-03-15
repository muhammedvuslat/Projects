import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blueGrey, grey, red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BarChartIcon from "@mui/icons-material/BarChart";
import { Box } from "@mui/system";
import useBlogCalls from "../hooks/useBlogCalls";
import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useAuthContext } from "../contexts/AuthProvider";
import cardStyle from "./styles/DetailCard.module.css";
import { useNavigate } from "react-router";
import DeleteIcon from "@mui/icons-material/Delete";

export default function DetailCard({
  blogDetailInfo,
  setBlogDetailInfo,
  setOpen,
}) {
  const { like, getBlogDetail, postComment, deleteBlog, deleteComment } =
    useBlogCalls();
  const [comment, setComment] = React.useState("");
  const { currentUser } = useAuthContext();
  const navigate = useNavigate();

  // console.log(blogDetailInfo);
  // console.log(comment);
  // console.log(currentUser);

  const handleClick = () => {
    like(blogDetailInfo?.id);
    getBlogDetail(blogDetailInfo?.id, setBlogDetailInfo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment({
      blog_id: blogDetailInfo.id,
      user_id: currentUser.id,
      content: comment,
    });
    getBlogDetail(blogDetailInfo?.id, setBlogDetailInfo);
    setComment("");
  };

  const handleDelete = () => {
    deleteBlog(blogDetailInfo.id);
    navigate("/");
  };

  const handleCommentDelete = (id) => {
    deleteComment(id);
    getBlogDetail(blogDetailInfo?.id, setBlogDetailInfo);
  };

  return (
    <Card sx={{ width: "70%" }}>
      <CardMedia
        component="img"
        height="194"
        image={blogDetailInfo?.image}
        alt={blogDetailInfo?.title}
      />
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {blogDetailInfo?.author?.slice(0, 1).toUpperCase()}
          </Avatar>
        }
        title={blogDetailInfo?.author?.toUpperCase()}
        subheader={new Date(blogDetailInfo?.published_date).toDateString()}
      />

      <CardContent>
        <Typography variant="h5">{blogDetailInfo?.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {blogDetailInfo?.content}
        </Typography>
      </CardContent>

      <CardActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Box>
          <IconButton aria-label="add to favorites" onClick={handleClick}>
            <FavoriteIcon sx={{ color: blogDetailInfo?.has_liked && "red" }} />
            <Typography variant="body2" color="text.secondary">
              {blogDetailInfo?.like_count}
            </Typography>
          </IconButton>
          <IconButton aria-label="share">
            <BarChartIcon />
            <Typography variant="body2" color="text.secondary">
              {blogDetailInfo?.get_view_count}
            </Typography>
          </IconButton>
        </Box>

        {currentUser.id === blogDetailInfo.author_id && (
          <Box>
            <Button
              variant="contained"
              color="success"
              sx={{ mr: ".5rem" }}
              onClick={() => setOpen(true)}
            >
              Update
            </Button>
            <Button variant="contained" color="error" onClick={handleDelete}>
              Delete
            </Button>
          </Box>
        )}
        <Button
          variant="contained"
          color="warning"
          onClick={() => navigate(-1)}
        >
          Go Back
        </Button>
      </CardActions>
      <Box
        sx={{
          background: grey[600],
          margin: ".5rem",
          padding: ".5rem",
          borderRadius: "5px",
        }}
      >
        <Typography variant="h5">Comments</Typography>
        {blogDetailInfo?.comments?.map((item, index) => (
          <Box
            key={index}
            sx={{
              background: grey[300],
              margin: ".5rem",
              padding: "0 .5rem",
              display: "flex",
              alignItems: "center",
              borderRadius: "5px",
            }}
          >
            <Box>
              {item.user.avatar ? (
                <Avatar
                  src={item.user.avatar}
                  sx={{ bgcolor: red[500] }}
                  aria-label="recipe"
                />
              ) : (
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {item.user.display_name.slice(0, 1).toUpperCase()}
                </Avatar>
              )}
            </Box>
            <Box
              sx={{
                marginLeft: ".5rem",
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography variant="h6">{item.user.display_name}</Typography>
                <Typography paragraph color={blueGrey[600]}>
                  {item.content}
                </Typography>
              </Box>

              <Box>
                {currentUser.id === item.user_id ? (
                  <IconButton
                    aria-label="add to favorites"
                    onClick={() => handleCommentDelete(item.id)}
                  >
                    <DeleteIcon sx={{ color: "red" }} />
                  </IconButton>
                ) : (
                  <IconButton aria-label="add to favorites" disabled>
                    <DeleteIcon sx={{ color: "red" }} />
                  </IconButton>
                )}
              </Box>
            </Box>
          </Box>
        ))}
        <Box
          sx={{
            background: grey[300],
            margin: ".5rem",
            padding: ".5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            borderRadius: "5px",
          }}
        >
          <Box>
            {currentUser.avatar ? (
              <Avatar
                src={currentUser.avatar}
                sx={{ bgcolor: red[500] }}
                aria-label="recipe"
              />
            ) : (
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {currentUser.username.slice(0, 1).toUpperCase()}
              </Avatar>
            )}
          </Box>
          <TextField
            required
            type="email"
            name="email"
            variant="outlined"
            label="Share Your Thoughts"
            value={comment || ""}
            onChange={(e) => setComment(e.target.value)}
            className={cardStyle["comment-input"]}
          />
          <Button type="submit" variant="contained" onClick={handleSubmit}>
            <SendIcon />
          </Button>
        </Box>
      </Box>
    </Card>
  );
}
