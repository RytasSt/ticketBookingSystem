# Ticket Booking System

## Requirements

## ADMINS

### create new screenings for watching a movie

POST screenings/ {movie_id, timestamp, ticket_allocation, remaining_tickets}
**screening**

- movie_id (reference to movie.id; positive int)
- timestamp (time must be in the future)
- ticket_allocation (positive int)
- remaining_tickets (positive int)

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
- remaining_tickets (positive int)

### get a list of tickets (bookings) made

**booking**

- screening_id (reference to screening.id; positive int)
- user_id (reference to user.id; positive int)

### create a ticket (booking) for a screening that has tickets left

**booking**

- screening_id (reference to screening.id; positive int)
- user_id (reference to user.id; positive int)
