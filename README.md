# Ticket Booking System

## Requirements

## ADMINS
### create new screenings for watching a movie
**screening**
- movie_id (reference to movie.id; positive int)
- timestamp (time must be in the future)
- ticket_allocation (positive int)
- tickets_left (positive int)

## USERS
### get a list of movies by providing movie IDs
**movie**
- title (string, length constraint)
- year (string/number, length constraint)

### get a list of screenings available for booking
**screening**
- movie_id (reference to movie.id; positive int)
- timestamp (time must be in the future)
- ticket_allocation (positive int)
- tickets_left (positive int)

### get a list of tickets (bookings) made
**booking**
- movie_id (reference to movie.id; positive int)
- user_id (reference to user.id; positive int)

### create a ticket (booking) for a movie screening that has tickets left
**booking**
- movie_id (reference to movie.id; positive int)
- user_id (reference to user.id; positive int)